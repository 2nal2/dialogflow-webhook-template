export default interface SaleContext {
    insuranceCompanies?: Array<{name: string, optionNumber: Number}>,
    selectedCompanyName?: string,
    make?: string,
    model?: string,
    distanceUnit: any,
    mileageAmount: number,
    optionNumber: number,
    companyName: string,
    phoneNumber: string,
}