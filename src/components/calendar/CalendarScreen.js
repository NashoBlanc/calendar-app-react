import React, { useState } from 'react'
import { NavBar } from '../ui/NavBar'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "moment/locale/es";
import {messages} from '../../helpers/calendar-message-es';
import { CalendarEvent } from './CalendarEvent';
moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'nacho'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {

    }

    const onSelectEvent = (e) => {

    }    

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e);

    }

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
                  onDoubleClickEvent={onDoubleClick}
                  onSelectEvent={onSelectEvent}
                  onView={onViewChange}
                  view={lastView}
                  components={{event: CalendarEvent}}
                />
        </div>
    )
}
