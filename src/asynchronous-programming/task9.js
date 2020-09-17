export const asyncBar = async () => 'Some string';
export async function foo() {
  const result = await asyncBar();
  console.log(result);
}

foo();
