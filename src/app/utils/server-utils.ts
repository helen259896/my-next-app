import 'server-only';

export const serverSideFunction = () => {
  console.log(
    `query data,
    access data base server function`
  );
  return 'server function result';
}