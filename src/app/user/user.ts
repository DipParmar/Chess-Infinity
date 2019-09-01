export class User {
    constructor(
        public firstName: String = '',
        public lastName: String = '',
        public password: String = '',
        public dob: Date = null,
        public email: String = '',
        public notification: String = 'email',
        public phone: String = '',
        public gender?: Boolean,
        public mobileNo?: String,
        public address?: Object,
        public rating?: number,
    ) {

    }
}
