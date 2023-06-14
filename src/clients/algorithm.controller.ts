import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ClientDto} from "./dto/algorithm.dto";
import {AlgorithmService} from "./algorithm.service";

@Controller('algorithm')
export class AlgorithmController {
    constructor(private clientService: AlgorithmService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async register(@Body() createClientDto: ClientDto): Promise<boolean> {
        return await this.clientService.createClient(createClientDto);
    }

    @Post('find')
    @UsePipes(new ValidationPipe())
    async authorization(@Body() createClientDto: ClientDto): Promise<boolean>{
        return await this.clientService.findClient(createClientDto)
    }

    @Post('token')
    async token(@Body() body: { username: string }): Promise<boolean>{
        const { username } = body;
        return await this.clientService.findToken(username);
    }
}
