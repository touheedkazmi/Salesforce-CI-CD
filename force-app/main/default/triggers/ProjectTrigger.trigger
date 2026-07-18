trigger ProjectTrigger on Project__c (before update) {
    if (Trigger.isBefore && Trigger.isUpdate) {
        ProjectTriggerHandler.beforeUpdate(Trigger.new, Trigger.oldMap);
    }
}