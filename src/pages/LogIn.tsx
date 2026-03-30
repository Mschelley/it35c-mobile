import { IonHeader, IonPage, IonTitle, IonToolbar, IonContent, IonButton } from '@ionic/react';
import { useIonRouter } from '@ionic/react';

const LogIn: React.FC = () => {
    const navigation = useIonRouter();

    const doLogIn = () => {
        navigation.push('/app', 'forward', 'replace');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Log In</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonButton expand="full" onClick={() => doLogIn()}>
                    Log In
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default LogIn;