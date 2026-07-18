@isTest
private class ProjectTriggerHandlerTest {

    @isTest
    static void testProjectMarkedCompleted() {

        // Arrange
        Project__c project = new Project__c(
            // Name = 'Test Project',
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

        System.assertEquals(
            100,
            updatedProject.Completion__c,
            'Completion should be updated to 100.'
        );

        System.assertEquals(
            'Completed',
            updatedProject.Status__c,
            'Status should automatically change to Completed.'
        );
    }

    @isTest
    static void testProjectNotCompleted() {

        // Arrange
        Project__c project = new Project__c(
            // Name = 'Test Project',
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

        System.assertEquals(
            75,
            updatedProject.Completion__c,
            'Completion should be updated to 75.'
        );

        System.assertEquals(
            'Development',
            updatedProject.Status__c,
            'Status should remain unchanged when completion is less than 100.'
        );
    }
}