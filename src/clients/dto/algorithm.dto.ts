import { IsNotEmpty, IsString } from 'class-validator';

export class ClientDto {
    @IsNotEmpty({ message: 'Не все поля заполнены' })
    readonly username: string;

    @IsNotEmpty({ message: 'Не все поля заполнены' })
    readonly password: string;
}