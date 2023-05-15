export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
<<<<<<< HEAD
            "title": " Kiyan's, Sandro's & Ives' Friend Tracker",
=======
            "title": "Kiyan Rassouli, Sandro Uhler, Ives Brunner's Friend Tracker",
>>>>>>> a9ab7fb1ad0239f42099b6b3cc4707b80f92e8d4
            "formList": [
                {
                    "id": "GroupForm", "title": "Group", "url": "/group", "formFieldList": [
                    {
                    "id": "name",
                    "type": "text",
                    "name": "GroupName", "width": 2,
                    "required": true
                    },
                    {
                    "type": "deleteButton", "name": "Delete"
                    }, {
                    "name": "Cancel" },
                    {
                    "type": "okButton", "name": "Ok"
                    } ]
                    },
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "group",
                            "type": "autocomplete", 
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2 },
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
<<<<<<< HEAD
                            "id": "nickname", 
                            "type": "text", 
                            "name": "Nickname", 
                            "width": 2, 
                            "required": true
                            }, 
                           
                        {
                            "id":   "location",
=======
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                          },
                        {
                            "id": "location",
>>>>>>> a9ab7fb1ad0239f42099b6b3cc4707b80f92e8d4
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id":   "activities",
                            "type": "autocomplete",
                            "name": "Activities",
                            "url": "/activities",
                            "form": "ActivityForm",
                            "width": 2
                    },
                       
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                        
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            
                        },
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "required": true
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                           
                        },
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            
                        },
                        
                        
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                      {
                        "id": "name",
                        "type": "text",
                        "name": "GroupName",
                        "width": 2,
                        "required": true
                      },
                      {
                        "type": "deleteButton",
                        "name": "Delete"
                      },
                      {
                        "type": "cancelButton",
                        "name": "Cancel"
                      },
                      {
                        "type": "okButton",
                        "name": "Ok"
                      }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                      {
                        "id": "name",
                        "type": "text",
                        "name": "Name",
                        "width": 2,
                        "required": true
                      },
                      {
                          "id": "location",
                          "type": "autocomplete",
                          "name": "Location",
                          "url": "/location",
                          "form": "LocationForm",
                          "width": 2
                        },
                      {
                        "type": "deleteButton",
                        "name": "Delete"
                      },
                      {
                        "type": "cancelButton",
                        "name": "Cancel"
                      },
                      {
                        "type": "okButton",
                        "name": "Ok"
                      }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "activitiespage", 
                    "elementList": [
                    {
                    "type": "backbutton",
                    }, {
                    "type": "newButton", 
                    "name": "NewActivity", 
                    "icon": "fa-weixin", 
                    "color": "green", 
                    "form": {
                    "form": "ActivityForm" }
                    } ]
                    },
                
                {
                    "id": "groupspage", 
                    "elementList": [
                    
                       
                    {
                    "type": "backbutton",
                    }, 
                    
                    {
                    "type": "newButton", 
                    "name": "NewGroup", 
                    "icon": "fa-weixin", 
                    "color": "green",                     
                 },

                 {
                    "type": "list",
                    "icon": "fa-weixin", 
                    "color": "wisteria", 
                    "search": true, 
                    "url": "/group", 
                    "form": {
                        "form": "GroupForm"
                     },
                }
                ]
            },
            
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
<<<<<<< HEAD
                            "type": "button", 
                            "name": "Groups", 
                            "icon": "fa-weixin", 
                            "color": "wisteria", 
                            "page": "groupspage",
                            },

                            {
                                
                                "type": "button", 
                                "name": "Activites", 
                                "icon": "fa-weixin", 
                                "color": "orange", 
                                "page": "activitiespage",
                                },
                            
                        
                            
=======
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Activities",
                            "icon": "fa-heart",
                            "color": "green",
                            "page": "activitypage",
                        },
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-weixin",
                            "color": "green",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                              "form": "GroupForm"
                            }
                          },
>>>>>>> a9ab7fb1ad0239f42099b6b3cc4707b80f92e8d4
                    ]
                   
                        
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
                {
                    "id": "activitiespage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-user",
                            "url": "/activity",
                            "color": "red",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "yellow",
                            "search": true,
                            "url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },

                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },

                        
                        
                    ]
                },
                {
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-heart",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-heart",
                            "color": "blue",
                            "search": true,
                            "url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
