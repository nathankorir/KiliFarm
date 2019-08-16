export class SignUpInfo {
    firstname: string;
	lastname: string;
    phone: string;
    email: string;
    password: string;

    constructor(firstname: string, lastname: string, phone: string, email: string, password: string) {
        this.firstname = firstname;
		this.lastname = firstname;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}
