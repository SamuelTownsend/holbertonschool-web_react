import { Map } from 'immutable';
import { initialState, }  from '../reducers/notificationReducer';
import notificationReducer from '../reducers/notificationReducer';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  let state;

  beforeEach(() => {
    state = Map(notificationReducer(initialState, { type: 'any_action' }));
  });

  it('filterTypeSelected should return the filter type', () => {
    expect(filterTypeSelected(state)).toEqual(initialState.filter);
  });

  it('getNotifications should return all notifications', () => {
    expect(getNotifications(state)).toEqual(initialState.notifications);
  });

  it('getUnreadNotifications should return all unread notifications', () => {
    const unreadNotifications = initialState.notifications.filter(
      notification => !notification.isRead
    );
    expect(getUnreadNotifications(state)).toEqual(unreadNotifications);
  });
});
