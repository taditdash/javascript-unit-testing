import { fireEvent, render } from '@testing-library/vue'
import ContactsTable from '@/components/ContactsTable.vue'

const contacts = [
  {
    "Id": 1,
    "FirstName": "Tadit",
    "LastName": "Dash",
    "Mobile": "9132994288"
  },
  {
    "Id": 2,
    "FirstName": "Pravasini",
    "LastName": "Sahoo",
    "Mobile": "1234567890"
  }];

describe('ContactsTable.vue', () => {
  it('renders all contacts with all column data', () => {
      const { getByText } = render(ContactsTable, {
          props: { dataRows: contacts }
      })

      contacts.forEach(contact => {
        getByText(contact.FirstName);
        getByText(contact.LastName);
        getByText(contact.Mobile)
      });
  })

  it('clicking DELETE button emits onRowDelete event', async () => {
    const { getByTestId, emitted } = render(ContactsTable, {
        props: { dataRows: contacts }
    });

    fireEvent.click(getByTestId("btn-delete-2"));

    expect(emitted().onRowDelete).toBeTruthy();
  })
})