const hideEmail = (email, options) => {
  if (!email || email.indexOf('@') === -1) return email
  const emailName = email.split('@')[0]
  const emailDomain = email.split('@')[1]

  const usernameSize = options?.usernameSize === 0 ? 0 : (options?.usernameSize ? (options?.usernameSize > emailName.length ? emailName.length : Number(options?.usernameSize) ) : emailName.length)
  const domainSize = options?.domainSize === 0 ? 0 : (options?.domainSize ? (options?.domainSize > emailDomain.length ? emailDomain.length : Number(options?.domainSize) ) : emailDomain.length)
  const char = options?.char ? String(options?.char) : '*'

  const maskedName = `${emailName.substring(0, Number(usernameSize))}${char.repeat(emailName.length - usernameSize)}`
  const maskedDomain = `${emailDomain.substring(0, Number(domainSize))}${char.repeat(emailDomain.length - domainSize)}`

  return `${maskedName}@${maskedDomain}`
}

const hideCpf = (cpf, options) => {
  if (!cpf) return cpf
  
  const onlyNumbers = cpf.replaceAll(".", "").replaceAll("-","")
  const char = options?.char ? String(options?.char) : '*'
  const showMasked = options?.showMasked !== undefined ? options?.showMasked : true

  const maskedBlock1 = options?.mask1 ? char.repeat(3) : onlyNumbers.substring(0,3)
  const maskedBlock2 = options?.mask2 ? char.repeat(3) : onlyNumbers.substring(3,6)
  const maskedBlock3 = options?.mask3 ? char.repeat(3) : onlyNumbers.substring(6,9)
  const maskedBlock4 = options?.mask4 ? char.repeat(2) : onlyNumbers.substring(9,11)

  return showMasked ? `${maskedBlock1}.${maskedBlock2}.${maskedBlock3}-${maskedBlock4}` : `${maskedBlock1}${maskedBlock2}${maskedBlock3}${maskedBlock4}`
}

const hideCnpj = (cnpj, options) => {
  if (!cnpj) return cnpj
  
  const onlyNumbers = cnpj.replaceAll(".", "").replaceAll("-","").replaceAll("/","")
  const char = options?.char ? String(options?.char) : '*'
  const showMasked = options?.showMasked !== undefined ? options?.showMasked : true

  const maskedBlock1 = options?.mask1 ? char.repeat(2) : onlyNumbers.substring(0,2)
  const maskedBlock2 = options?.mask2 ? char.repeat(3) : onlyNumbers.substring(2,5)
  const maskedBlock3 = options?.mask3 ? char.repeat(3) : onlyNumbers.substring(5,8)
  const maskedBlock4 = options?.mask4 ? char.repeat(4) : onlyNumbers.substring(8,12)
  const maskedBlock5 = options?.mask5 ? char.repeat(2) : onlyNumbers.substring(12,14)

  return showMasked ? `${maskedBlock1}.${maskedBlock2}.${maskedBlock3}/${maskedBlock4}-${maskedBlock5}` : `${maskedBlock1}${maskedBlock2}${maskedBlock3}${maskedBlock4}${maskedBlock5}`
}

const hideCreditCard = (card, options) => {
  if (!card) return card
  
  const onlyNumbers = card.replaceAll(".", "").replaceAll("-","").replaceAll("/","").replaceAll(" ","")
  const char = options?.char ? String(options?.char) : '*'
  const showMasked = options?.showMasked !== undefined ? options?.showMasked : true

  const maskedBlock1 = options?.mask1 ? char.repeat(4) : onlyNumbers.substring(0,4)
  const maskedBlock2 = options?.mask2 ? char.repeat(4) : onlyNumbers.substring(4,8)
  const maskedBlock3 = options?.mask3 ? char.repeat(4) : onlyNumbers.substring(8,12)
  const maskedBlock4 = options?.mask4 ? char.repeat(4) : onlyNumbers.substring(12,16)

  return showMasked ? `${maskedBlock1} ${maskedBlock2} ${maskedBlock3} ${maskedBlock4}` : `${maskedBlock1}${maskedBlock2}${maskedBlock3}${maskedBlock4}`
}


export {
  hideEmail,
  hideCpf,
  hideCnpj,
  hideCreditCard
}
