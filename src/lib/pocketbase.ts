import PocketBase from 'pocketbase';

export const pb =  new PocketBase('http://50.116.57.111:8090')

pb.authStore.onChange((auth) => {
  console.log('Auth changed: ' + auth)
})
