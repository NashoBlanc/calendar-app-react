import React from 'react'
import { NavBar } from '../ui/NavBar'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "moment/locale/es";
import {messages} from '../../helpers/calendar-message-es';
moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel'
}]

export const CalendarScreen = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }

    }
    return (
        <div className="calendar-screen">
            <NavBar /> 
            <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  messages={messages}
                  eventPropGetter={eventStyleGetter}
                />
        </div>
    )
}
