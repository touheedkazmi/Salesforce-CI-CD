public with sharing class ProjectTriggerHandler {

    private static final Decimal COMPLETION_COMPLETE = 100;

    public static void beforeUpdate(
        List<Project__c> newProjects,
        Map<Id, Project__c> oldMap
    ) {

        for (Project__c project : newProjects) {

            Project__c oldProject = oldMap.get(project.Id);

            if (
                project.Completion__c == COMPLETION_COMPLETE &&
                oldProject.Completion__c != COMPLETION_COMPLETE &&
                project.Status__c != 'Completed'
            ) {
                project.Status__c = 'Completed';
            }
        }
    }
}