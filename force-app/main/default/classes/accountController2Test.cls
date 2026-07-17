@isTest
private class accountController2Test {
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
        List<Account> result = accountController2.getAccountList();
        Test.stopTest();

        System.assertNotEquals(null, result);
        System.assertEquals(true, result.size() <= 5);
    }

    @isTest
    static void testFilterAccountByTypeReturnsMatchingAccounts() {
        Test.startTest();
        List<Account> result = accountController2.filterAccountByType('Customer - Direct');
        Test.stopTest();

        System.assertEquals(2, result.size());
        for (Account acc : result) {
            System.assertEquals('Customer - Direct', acc.Type);
        }
    }
}
