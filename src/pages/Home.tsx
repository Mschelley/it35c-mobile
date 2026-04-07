import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { document,chevronUpCircle, colorPalette, globe } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>


       <IonFab slot="fixed" vertical="bottom" horizontal="end">
                 <IonFabButton>
                   <IonIcon icon={chevronUpCircle}></IonIcon>
                 </IonFabButton>
                 <IonFabList side="top">
                   <IonFabButton>
                     <IonIcon icon={document}></IonIcon>
                   </IonFabButton>
                   <IonFabButton>
                     <IonIcon icon={colorPalette}></IonIcon>
                   </IonFabButton>
                   <IonFabButton>
                     <IonIcon icon={globe}></IonIcon>
                   </IonFabButton>
                 </IonFabList>
        </IonFab>

        <ExploreContainer></ExploreContainer>
      
      
      </IonContent>
    </IonPage>
  );
};

export default Home;