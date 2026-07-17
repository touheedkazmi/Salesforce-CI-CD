@isTest
private class MyTestTriggerTest {
    @isTest
    static void testBeforeInsertRequiresLeadSource() {
        Lead leadRecord = new Lead(
            FirstName = 'Test',
            LastName = 'Lead',
            Company = 'Acme'
        );

        Test.startTest();
        Database.SaveResult result = Database.insert(leadRecord, false);
        Test.stopTest();

        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        System.assertEquals('Lead Source is mandatory from trigger', result.getErrors()[0].getMessage());
    }

    @isTest
    static void testAfterInsertHotLeadCreatesTask() {
        Lead leadRecord = new Lead(
            FirstName = 'Hot',
            LastName = 'Lead',
            Company = 'Acme',
            LeadSource = 'Web',
            Rating = 'Hot'
        );

        Test.startTest();
        insert leadRecord;
        Test.stopTest();

        Lead insertedLead = [
            SELECT Id, Company
            FROM Lead
            WHERE Id = :leadRecord.Id
            LIMIT 1
        ];

        System.assertEquals('Acme Inc', insertedLead.Company);

        List<Task> tasks = [
            SELECT Id, WhoId, Subject, Priority
            FROM Task
            WHERE WhoId = :insertedLead.Id
        ];

        System.assertEquals(1, tasks.size());
        System.assertEquals('Follow up on a new hot lead', tasks[0].Subject);
        System.assertEquals('High', tasks[0].Priority);
    }

    @isTest
    static void testBeforeAndAfterUpdateAppendCompanyAndCreateTask() {
        Lead leadRecord = new Lead(
            FirstName = 'Updated',
            LastName = 'Lead',
            Company = 'Acme',
            LeadSource = 'Web',
            Rating = 'Warm'
        );
        insert leadRecord;

        leadRecord.Rating = 'Hot';
        leadRecord.LeadSource = 'Phone';

        Test.startTest();
        update leadRecord;
        Test.stopTest();

        Lead updatedLead = [
            SELECT Id, Company, Rating
            FROM Lead
            WHERE Id = :leadRecord.Id
            LIMIT 1
        ];

        System.assertEquals('Acme Inc', updatedLead.Company);
        System.assertEquals('Hot', updatedLead.Rating);

        List<Task> tasks = [
            SELECT Id, WhoId, Subject
            FROM Task
            WHERE WhoId = :updatedLead.Id
        ];

        System.assertEquals(1, tasks.size());
        System.assertEquals('Follow up on a new hot lead', tasks[0].Subject);
    }
}
