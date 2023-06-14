import { Injectable } from '@nestjs/common';
import {KmpDto} from "./dto/kmp.dto";

@Injectable()
export class KmpService {

    computePrefixFunction(pattern: string): number[] {
        let k = 0;
        const pi: number[] = new Array(pattern.length).fill(0);

        let i = 1;
        while (i < pattern.length) {
            if (pattern[i] === pattern[k]) {
                k++;
                pi[i] = k;
                i++;
            } else {
                if (k !== 0) {
                    k = pi[k - 1];
                } else {
                    pi[i] = 0;
                    i++;
                }
            }
        }

        return pi;
    }

    KMPSearch(kmpDto: KmpDto): string {
        const pattern = kmpDto.image;
        const text = kmpDto.text;
        let result = 0;

        const pi: number[] = this.computePrefixFunction(pattern);

        let i = 0;
        let j = 0;

        while (i < text.length) {
            if (pattern[j] === text[i]) {
                j++;
                i++;
            }

            if (j === pattern.length) {
                switch (kmpDto.option) {
                    case "count":
                        result += 1;
                        break;
                    case "index":
                        result = i - j;
                        break;
                }
                j = pi[j - 1];
            } else if (i < text.length && pattern[j] !== text[i]) {
                if (j !== 0) {
                    j = pi[j - 1];
                } else {
                    i++;
                }
            }
        }

        return String(result);
    }
}
