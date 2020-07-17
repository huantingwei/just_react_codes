import moment from 'moment'

export const Types = {
    DISPLAY: 'nasa/apod/display',
}

export const Actions = {
    display: (data) => ({
        type: Types.DISPLAY, 
        payload: data,
    }),
}

const initialState = {
    dataSource: {
        copyright: '', 
        date: moment().format('YYYY-MM-DD'),
        explanation: '', 
        hdurl: '',
        media_type: 'image',
        service_version: 'v1',
        title: 'No Astronomy Picture of the Day available...', 
        url: ''
    }
}

export default function identify(state = initialState, action) {
    const { payload } = action
    switch (action.type) {
        case Types.DISPLAY:
            return { ...payload }
        default:
            return state
    }
}