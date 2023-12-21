class AddressData {
    constructor(country, name, mobileNumber, zipcode, address, city, state) {
        this.country = country;
        this.name = name;
        this.mobileNumber = mobileNumber,
        this.zipcode = zipcode,
        this.address = address,
        this.city = city,
        this.state = state
    }

    get data() {
        return [
            this.country,
            this.address,
            this.city,
            this.state,
            this.zipcode,
            this.name,
            this.mobileNumber
        ]
    }
}

module.exports = AddressData;