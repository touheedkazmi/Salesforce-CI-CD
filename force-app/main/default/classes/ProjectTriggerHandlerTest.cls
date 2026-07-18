@isTest
private class ProjectTriggerHandlerTest {

    @isTest
    static void testTriggerSetsStatusCompletedWhenCompletionReaches100() {
        Project__c project = new Project__c(
            Completion__c = 90,
            Status__c = 'In Progress'       
        );
        insert project;

        Project__c projectToUpdate = [
            SELECT Id, Completion__c, Status__c
            FROM Project__c
            WHERE Id = :project.Id
            LIMIT 1
        ];
        projectToUpdate.Completion__c = 100;

        Test.startTest();
        update projectToUpdate;
        Test.stopTest();

        Project__c result = [
            SELECT Id, Completion__c, Status__c
            FROM Project__c
            WHERE Id = :project.Id
            LIMIT 1
        ];

        System.assertEquals('Completed', result.Status__c);
    }

    @isTest
    static void testTriggerDoesNotChangeStatusWhenCompletionDoesNotReach100() {
        Project__c project = new Project__c(
            Completion__c = 80,
            Status__c = 'In Progress'
        );
        insert project;

        Project__c projectToUpdate = [
            SELECT Id, Completion__c, Status__c
            FROM Project__c
            WHERE Id = :project.Id
            LIMIT 1
        ];
        projectToUpdate.Completion__c = 95;

        Test.startTest();
        update projectToUpdate;
        Test.stopTest();

        Project__c result = [
            SELECT Id, Completion__c, Status__c
            FROM Project__c
            WHERE Id = :project.Id
            LIMIT 1
        ];

        System.assertEquals('In Progress', result.Status__c);
    }
}
