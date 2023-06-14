import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import {ClientsEntity} from "./entity/algorithm.entity";
import {ClientDto} from "./dto/algorithm.dto";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {TokenEntity} from "./entity/algorithm.entity.token";

@Injectable()
export class AlgorithmService {
    constructor(
        @InjectRepository(ClientsEntity)
        private readonly clientRepository: Repository<ClientsEntity>,
        @InjectRepository(TokenEntity)
        private readonly tokenRepository: Repository<TokenEntity>,
    ) {}


    async createClient(clientDto: ClientDto): Promise<boolean> {
        const client = await this.clientRepository.findOne({where: {username: clientDto.username}})
        if (client){
            return false
        }
        else{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(clientDto.password, saltRounds);
            await this.clientRepository.save({ ...clientDto, password: hashedPassword });
            return true;
        }
    }

    async findClient(clientDto: ClientDto): Promise<boolean> {
        const client = await this.clientRepository.findOne({ where: { username: clientDto.username } });
        if (client) {
            const passwordMatch = await bcrypt.compare(clientDto.password, client.password);
            if (passwordMatch) {
                const existingToken = await this.tokenRepository.findOne({ where: { userId: client.id } });
                if (existingToken) {
                    await this.tokenRepository.remove(existingToken);
                }

                const token = jwt.sign({ userId: client.id }, 'secretKey', { expiresIn: '1h' });
                const tokenEntity = new TokenEntity();
                tokenEntity.userId = client.id;
                tokenEntity.username = client.username;
                tokenEntity.token = token;
                tokenEntity.expirationDate = new Date(Date.now() + 60000); // Срок действия 1 час
                await this.tokenRepository.save(tokenEntity);
                return true;
            }
        }
        return false;
    }
    
    async findToken(username: string): Promise<boolean> {
        const tokenEntity = await this.tokenRepository.findOne({ where: { username } });
        if (tokenEntity && tokenEntity.expirationDate > new Date()) {
            return true;
        }
        else{
            return false;
        }
    }

}
