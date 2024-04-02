export const hello = (params: Record<string, string>) => {
  const name = params.name || 'World';
  if (Number.isNaN(Number(name))){
    return `Hello ${name.replaceAll(/[0-9]/g, '')}!`
  } else {
    return `Hello World!`
  }
}