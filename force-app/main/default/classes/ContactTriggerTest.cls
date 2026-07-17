@isTest
private class ContactTriggerTest {
    @isTest
    static void testBeforeInsertAllowsContactInsertion() {
        List<Contact> contactsToInsert = new List<Contact>{
            new Contact(FirstName = 'John', LastName = 'Doe'),
            new Contact(FirstName = 'Jane', LastName = 'Smith')
        };

        Test.startTest();
        insert contactsToInsert;
        Test.stopTest();

        List<Contact> insertedContacts = [
            SELECT Id, FirstName, LastName
            FROM Contact
            WHERE Id IN :contactsToInsert
        ];

        System.assertEquals(2, insertedContacts.size());
        System.assertEquals('John', insertedContacts[0].FirstName);
        System.assertEquals('Doe', insertedContacts[0].LastName);
    }
}
