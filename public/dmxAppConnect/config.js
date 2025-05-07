dmx.config({
  "booking_admin_side": {
    "admin_display_booking_details": {
      "meta": [
        {
          "type": "number",
          "name": "booking_id"
        },
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "number",
          "name": "time_id"
        },
        {
          "type": "text",
          "name": "username"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "role_id"
        },
        {
          "type": "text",
          "name": "start_time"
        },
        {
          "type": "text",
          "name": "end_time"
        },
        {
          "type": "text",
          "name": "roles"
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "type": "number",
          "name": "booking_id"
        },
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "text",
          "name": "start_time"
        },
        {
          "type": "text",
          "name": "end_time"
        },
        {
          "type": "number",
          "name": "hour"
        },
        {
          "type": "text",
          "name": "username"
        },
        {
          "type": "text",
          "name": "roles"
        },
        {
          "type": "number",
          "name": "role_id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "time_id"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "booking_id"
        },
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "text",
          "name": "start_time"
        },
        {
          "type": "text",
          "name": "end_time"
        },
        {
          "type": "number",
          "name": "hour"
        },
        {
          "type": "text",
          "name": "username"
        },
        {
          "type": "text",
          "name": "roles"
        },
        {
          "type": "number",
          "name": "role_id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "time_id"
        },
        {
          "type": "text",
          "name": "status"
        }
      ],
      "outputType": "array"
    }
  },
  "Booking_slots": {
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "text",
          "name": "start_time"
        },
        {
          "type": "text",
          "name": "end_time"
        },
        {
          "type": "number",
          "name": "booking_id"
        },
        {
          "type": "text",
          "name": "status"
        }
      ],
      "outputType": "array"
    },
    "booking_details": {
      "meta": [
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "text",
          "name": "start_time"
        },
        {
          "type": "text",
          "name": "end_time"
        },
        {
          "type": "number",
          "name": "booking_id"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "time_id"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat2": {
      "meta": null,
      "outputType": "array"
    },
    "user_id": {
      "meta": null,
      "outputType": "array"
    },
    "user_single_data_details": {
      "meta": null,
      "outputType": "array"
    },
    "user_slot_details": {
      "meta": [
        {
          "type": "text",
          "name": "start_time"
        },
        {
          "type": "text",
          "name": "end_time"
        },
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "text",
          "name": "mroom_name"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "booking_id"
        }
      ],
      "outputType": "array"
    }
  },
  "users_admin": {
    "selected_user": {
      "meta": null,
      "outputType": "number"
    }
  },
  "password_reset_link": {
    "query": [
      {
        "type": "text",
        "name": "id"
      },
      {
        "type": "text",
        "name": "email"
      }
    ]
  },
  "password_new": {
    "query": [
      {
        "type": "text",
        "name": "id"
      },
      {
        "type": "text",
        "name": "email"
      }
    ]
  },
  "meeting_rooms": {
    "data_detail1": {
      "meta": [
        {
          "type": "text",
          "name": "mroom_name"
        },
        {
          "type": "text",
          "name": "mdesc"
        },
        {
          "type": "number",
          "name": "id"
        }
      ],
      "outputType": "array"
    }
  },
  "bookings_all": {
    "all_bookings": {
      "meta": [
        {
          "type": "date",
          "name": "date"
        },
        {
          "type": "text",
          "name": "start_time"
        },
        {
          "type": "text",
          "name": "end_time"
        },
        {
          "type": "number",
          "name": "booking_id"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "time_id"
        },
        {
          "type": "text",
          "name": "mroom_name"
        },
        {
          "type": "number",
          "name": "id"
        }
      ],
      "outputType": "array"
    }
  }
});
