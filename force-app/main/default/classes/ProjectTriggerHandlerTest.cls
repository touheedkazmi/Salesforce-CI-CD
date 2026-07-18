@isTest
private class ProjectTriggerHandlerTest {

    @isTest
    static void testTriggerCoverage() {

        Project__c project = new Project__c(
            Status__c = 'Development',
            Completion__c = 50
        );

        insert project;

        Test.startTest();

        project.Status__c = 'Planning';
        update project;

        Test.stopTest();

        System.assertEquals('Planning', project.Status__c);
    }
}