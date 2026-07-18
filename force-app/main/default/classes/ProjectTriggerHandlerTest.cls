@isTest
private class ProjectTriggerHandlerTest {

    @isTest
    static void testBeforeUpdateSetsStatusCompletedWhenCompletionReaches100() {
        Project__c project = new Project__c(
            Completion__c = 90,
            Status__c = 'In Progress'
        );
        insert project;

        Project__c updatedProject = new Project__c(
            Id = project.Id,
            Completion__c = 100,
            Status__c = 'In Progress'
        );

        Map<Id, Project__c> oldMap = new Map<Id, Project__c>{
            project.Id => new Project__c(
                Id = project.Id,
                Completion__c = 90,
                Status__c = 'In Progress'
            )
        };

        Test.startTest();
        ProjectTriggerHandler.beforeUpdate(
            new List<Project__c>{ updatedProject },
            oldMap
        );
        Test.stopTest();

        System.assertEquals('Completed', updatedProject.Status__c);
    }

    @isTest
    static void testBeforeUpdateDoesNotChangeStatusWhenCompletionDoesNotReach100() {
        Project__c project = new Project__c(
            Completion__c = 80,
            Status__c = 'In Progress'
        );
        insert project;

        Project__c updatedProject = new Project__c(
            Id = project.Id,
            Completion__c = 95,
            Status__c = 'In Progress'
        );

        Map<Id, Project__c> oldMap = new Map<Id, Project__c>{
            project.Id => new Project__c(
                Id = project.Id,
                Completion__c = 80,
                Status__c = 'In Progress'
            )
        };

        Test.startTest();
        ProjectTriggerHandler.beforeUpdate(
            new List<Project__c>{ updatedProject },
            oldMap
        );
        Test.stopTest();

        System.assertEquals('In Progress', updatedProject.Status__c);
    }
}
