export const productsLoader =  ({ params, request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const { name } = params;
  const response =  fetch(
    `/api/products/${name}?page=${page}`
  );

  return {data: response.then((res) => res.json())};
};
