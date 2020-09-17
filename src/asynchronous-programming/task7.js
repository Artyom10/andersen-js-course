export const getPromise1 = () => Promise.resolve(2);
export const getPromise2 = () => Promise.resolve(3);
export const getPromise3 = () => Promise.resolve(7);

export async function fooAsyncAwait() {
  const value1 = await getPromise1();
  const value2 = await getPromise2();
  const value3 = await getPromise3();
  console.log(value1 * (value2 + value3));
}

fooAsyncAwait();
