export default function formatCurrency(value, currency) {
    return value.toLocaleString('pt-br', {style: 'currency', currency});
}
