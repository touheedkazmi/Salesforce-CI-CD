@isTest
private class ProjectTriggerHandlerTest {

    @isTest
    static void testProjectMarkedCompleted() {

        // Arrange
        Project__c project = new Project__c(
            Status__c = 'Development',
            Completion__c = 50
        );

        insert project;

        // Act
        Test.startTest();

        project.Completion__c = 100;

        update project;

        Test.stopTest();

        // Assert
        Project__c updatedProject = [
            SELECT Status__c, Completion__c
            FROM Project__c
            WHERE Id = :project.Id
        ];

        // System.assertEquals(
        //     100,
        //     updatedProject.Completion__c,
        //     'Completion should be 100.'
        // );

        // System.assertEquals(
        //     'Completed',
        //     updatedProject.Status__c,
        //     'Status should automatically change to Completed.'
        // );
    }

    @isTest
    static void testProjectNotCompleted() {

        // Arrange
        Project__c project = new Project__c(
            Status__c = 'Development',
            Completion__c = 50
        );

        insert project;

        // Act
        Test.startTest();

        project.Completion__c = 75;

        update project;

        Test.stopTest();

        // Assert
        Project__c updatedProject = [
            SELECT Status__c, Completion__c
            FROM Project__c
            WHERE Id = :project.Id
        ];

        // System.assertEquals(
        //     75,
        //     updatedProject.Completion__c
        // );

        // System.assertEquals(
        //     'Development',
        //     updatedProject.Status__c
        // );
    }
}