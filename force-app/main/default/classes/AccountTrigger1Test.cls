@isTest
private class AccountTrigger1Test {
    @isTest
    static void testBeforeInsertPopulatesAccountFields() {
        Account acc = new Account(Name = 'Test Account');

        Test.startTest();
        insert acc;
        Test.stopTest();

        Account result = [
            SELECT Description, Phone, Industry, Website
            FROM Account
            WHERE Id = :acc.Id
            LIMIT 1
        ];

        System.assertEquals('Description from a trigger test adding few more lines', result.Description);
        System.assertEquals('121212999', result.Phone);
        System.assertEquals('Banking', result.Industry);
        System.assertEquals('www.testwebsite.com', result.Website);
    }
}
