module.exports = class Contract {
  constructor ({
    _id,
    externalId,
    contractNumber,
    provider,
    companyId,
    customerId,
    projectId,
    productServiceId,
    categoryId,
    departmentId,
    departmentPercentage,
    type,
    municipalServiceCode,
    registerDate,
    startDate,
    endDate,
    expectedPaymentDay,
    grossValue,
    netValue,
    discounts,
    taxAmount,
    taxes: {
      ir,
      pis,
      cofins,
      csll,
      icms,
      iss
    },
    status,
    billed,
    billingType,
    step,
    notes,
    createdAt,
    updatedAt
  }) {
    this._id = _id
    this.externalId = externalId
    this.contractNumber = contractNumber
    this.provider = provider
    this.companyId = companyId
    this.customerId = customerId
    this.projectId = projectId
    this.productServiceId = productServiceId
    this.categoryId = categoryId
    this.departmentId = departmentId
    this.departmentPercentage = departmentPercentage
    this.type = type
    this.municipalServiceCode = municipalServiceCode
    this.registerDate = registerDate
    this.startDate = startDate
    this.endDate = endDate
    this.expectedPaymentDay = expectedPaymentDay
    this.grossValue = grossValue
    this.netValue = netValue
    this.discounts = discounts
    this.taxAmount = taxAmount
    this.taxes = {
      ir,
      pis,
      cofins,
      csll,
      icms,
      iss
    }
    this.status = status
    this.billed = billed
    this.billingType = billingType
    this.step = step
    this.notes = notes
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
