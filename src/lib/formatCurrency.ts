const formatterInstance = new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR" });

export function formatCurrency(price: number) { 

   return formatterInstance.format(price)
}
