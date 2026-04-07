import {  IonMenuButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane, IonMenu, IonContent, IonMenuToggle, IonItem, IonIcon, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { homeOutline, settingsOutline, informationOutline} from 'ionicons/icons';
import Page1 from './Page1';
import Page2 from './Page2';
import Home from './Home';



 const Menu: React.FC<{}> = () => {
    const path=[
        {name: 'Home', url: '/app/home', icon: homeOutline},
        {name: 'Page 1', url: '/app/page1', icon: settingsOutline},
        {name: 'Page 2', url: '/app/page2', icon: informationOutline}
    ]
    return(
        <IonPage>

        <IonSplitPane contentId="main">
            <IonMenu contentId="main">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                        <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
          </IonButtons>
                    </IonToolbar>
                   
                </IonHeader>

                <IonContent>
                    {/* Sidemenu Items */}
                    {path.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                </IonContent>

            </IonMenu>
            <IonRouterOutlet id="main">
                <Route exact path="/app/home" component={Home} />
                <Route exact path="/app/page1" component={Page1} />
                <Route exact path="/app/page2" component={Page2} />
                <Redirect from="/app" to="/app/home" exact />
            </IonRouterOutlet>
        </IonSplitPane>
           </IonPage>
    );
 };

 export default Menu;