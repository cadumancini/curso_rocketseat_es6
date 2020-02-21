export function soma(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function showName(nome, sobrenome) { // pode-se trazer com 'default' uma função/classe/etc, para ser importado
  return `${nome} ${sobrenome}`;
}