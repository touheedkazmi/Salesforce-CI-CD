public with sharing class ProjectTriggerHandler {

    public static void beforeUpdate(
        List<Project__c> newProjects,
        Map<Id, Project__c> oldMap
    ) {

        for (Project__c project : newProjects) {

            Project__c oldProject = oldMap.get(project.Id);

            // Only act when Completion changes to 100
            if (
                project.Completion__c == 100 &&
                oldProject.Completion__c != 100
            ) {
                project.Status__c = 'Completed';
            }
        }
    }
}