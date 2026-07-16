//trigger myTestTrigger on Lead (before insert, after insert, before update, after update,before delete, after delete,after undelete) {
 /*
    if(Trigger.isUpdate){
        if(Trigger.isBefore){
            System.debug('Lead Trigger Invoked before update');
        }
        
        if(Trigger.isafter){
            System.debug('Lead Trigger Invoked after update');
        }
    }
	*/
trigger myTestTrigger on Lead (before update, after update, before insert, after insert) {
    
    switch on Trigger.operationType{
        
        when BEFORE_UPDATE, BEFORE_INSERT  {
            System.debug('Lead trigger invoked before update');
            //Lead leadRecord = Trigger.new[0]; //List<lead>
            List<lead> leads = Trigger.new;
            lead leadRecord = leads[0];
           // leadRecord.Company = leadRecord.Company + ' Inc';
            leadRecord.Company +=' Inc';
            
            if(leadRecord.LeadSource == null){
                leadRecord.addError('Lead Source is mandatory from trigger');
            }
            
        }
        when AFTER_INSERT, AFTER_UPDATE{
            System.debug('Lead trigger invoked after update');
            List<Lead> leads = Trigger.new;
            Lead leadRecord = leads[0];
            
            if(leadRecord.Rating == 'Hot'){
                Task followup = new Task();
                followup.WhoId = leadRecord.Id;
                followup.Subject = 'Follow up on a new hot lead';
                followup.Priority = 'High';
                insert followup;
            }
            
        }
    }
    
    

}