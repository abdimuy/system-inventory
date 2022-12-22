export default ({
  textSearch = '',
  column,
  rows = []
}) => {
  const searchText = textSearch.toLowerCase();
  const filteredRows = rows.filter(row => {

    const rowText = row[column].toLowerCase();
    return rowText.includes(searchText);
  });
  return textSearch !== '' ? filteredRows : rows;
}