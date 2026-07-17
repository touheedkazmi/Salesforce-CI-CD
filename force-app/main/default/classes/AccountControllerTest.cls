@isTest
private class AccountControllerTest {
    @testSetup
    static void setupData() {
        List<Account> accounts = new List<Account>{
            new Account(Name = 'Acme', Type = 'Customer - Direct', Industry = 'Technology'),
            new Account(Name = 'Globex', Type = 'Customer - Channel', Industry = 'Finance'),
            new Account(Name = 'Initech', Type = 'Customer - Direct', Industry = 'Technology')
        };
        insert accounts;
    }

    @isTest
    static void testGetAccountListReturnsLimitedAccounts() {
        Test.startTest();
        List<Account> result = AccountController.getAccountList();
        Test.stopTest();

        System.assertNotEquals(null, result);
        System.assertEquals(true, result.size() <= 10);
    }

    @isTest
    static void testFilterAccountTypeReturnsMatchingAccounts() {
        Test.startTest();
        List<Account> result = AccountController.filterAccountType('Customer - Direct');
        Test.stopTest();

        System.assertEquals(2, result.size());
        for (Account acc : result) {
            System.assertEquals('Customer - Direct', acc.Type);
        }
    }

    @isTest
    static void testFindAccountsReturnsMatchingName() {
        Test.startTest();
        List<Account> result = AccountController.findAccounts('Acme');
        Test.stopTest();

        System.assertEquals(1, result.size());
        System.assertEquals('Acme', result[0].Name);
    }
}
