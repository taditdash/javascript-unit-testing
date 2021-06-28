import { fireEvent, render } from '@testing-library/vue'
import App from '../../src/App.vue'

describe('ContactsTable.vue', () => {
  it('clicking DELETE button on a row removes the row from the table', async () => {
    const { getByTestId, queryByTestId } = render(App);

    await fireEvent.click(getByTestId("btn-delete-2"));
    
    expect(queryByTestId("row-2")).toBeNull();
  })
})