import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,  IonTitle, IonToolbar } from '@ionic/react';

const Template: React.FC = () => {
  return (
    <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonButtons>
                      <IonMenuButton ></IonMenuButton>
                  <IonTitle>Search</IonTitle>
              </IonButtons>

          </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
            <h1>Template</h1>
      </IonContent>
    </IonPage>
  );
};

export default Template;