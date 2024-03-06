import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function PlannerCalendar() {
  const plans = [
    {
      title: "event 1",
      description: "설명이야!",
      start: "2024-03-01T07:30:00",
      end: "2024-03-02T15:30:00",
      textColor: "#FFFFFF",
      backgroundColor: "#378006",
      display: "block",
    },
    {
      title: "event2",
      description: "설명이야!",
      start: "2024-03-12T13:30:00",
      end: "2024-03-12T15:30:00",
      display: "block",
    },
  ];

  const fn_handleDateClick = (info: any) => {
    alert("Clicked " + info.dateStr);
  };

  const fn_handleSelect = (info: any) => {
    alert("Selected " + info.startStr + " to " + info.endStr);
  };

  const fn_handleEventClick = (info: any) => {
    var eventObj = info.event;
    alert("Clicked " + eventObj.title);
  };

  const fn_handleEventDrop = (info: any) => {
    var event = info.event;
    var oldEvent = info.oldEvent;

    alert(oldEvent.start + " to " + event.start);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={plans}
      height={"auto"}
      editable={true}
      selectable={true}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "today",
      }}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
        hour12: false,
      }}
      dateClick={fn_handleDateClick}
      select={fn_handleSelect}
      eventClick={fn_handleEventClick}
      eventDrop={fn_handleEventDrop}
    />
  );
}
