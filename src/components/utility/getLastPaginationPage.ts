export const getLastPaginationPage = (response: Response) => {
  const linkHeader = response.headers.get("Link");
  if (!linkHeader) return 1;
  const paginationPageParams = linkHeader.match(/(?<=_page=)\d+/gm);
  if (!paginationPageParams) return 1;
  const maxPage = Math.max(
    ...paginationPageParams.map((number) => parseInt(number, 10) || 0)
  );
  return maxPage;
};
