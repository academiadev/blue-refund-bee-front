export class TokenDTO {

    constructor(
        public access_token: string,
        public expires_in: number
    ) { }

}
