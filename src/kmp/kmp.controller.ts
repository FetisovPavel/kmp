import {Body, Controller, Post} from '@nestjs/common';
import {KmpDto} from "./dto/kmp.dto";
import {KmpService} from "./kmp.service";

@Controller('kmp')
export class KmpController {
    constructor(private kmpService: KmpService) {}

    @Post()
    getKmp(@Body() kmpDto: KmpDto): string {
        return this.kmpService.KMPSearch(kmpDto)
    }

}
