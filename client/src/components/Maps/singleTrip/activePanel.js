import React from "react"
import * as s from "./components"
import { connect } from "react-redux"
import moment from "moment"
import PropTypes from "prop-types"
import { TripPropTypes } from "../../propTypes"
import { Button } from "../../../styles/theme/styledComponents"
import { toggleWaypoint } from "../../../redux/actions/trips"
import marker from "../../icons/orange-marker.svg"
import startMarker from "../../icons/green-marker.svg"
import endMarker from "../../icons/black-marker.svg"

class ActiveTripPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      this.renderWaypoints()
      // this.props.drawPolyline(this.state.trip.waypoints)
    }, 500)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trip !== this.props.trip) {
      this.renderWaypoints()
    }
  }

  renderWaypoints = () => {
    this.props.waypoints.map(item => {
      let center = { lat: item.lat, lng: item.lon }
      const marker = new window.google.maps.Marker({
        position: center,
        map: window.map,
        title: item.name,
        lavel: item.order
      })
    })
  }

  render() {
    return (
      <s.Panel>
        {/* <s.PanelHeader>{this.props.trip.name}</s.PanelHeader>
        <s.DateLabel>
          Start: {moment(this.props.trip.start).format("YYYY-MM-DD")} - End:{" "}
          {moment(this.props.trip.end).format("YYYY-MM-DD")}
        </s.DateLabel> */}
        <s.WaypointTracker>
          {this.props.waypoints &&
            this.props.waypoints.map(waypoint => (
              <s.WaypointStepper key={waypoint.id}>
                <div>
                  <h4>{waypoint.name}</h4>
                  <div>
                    ETA: {moment(waypoint.start).format("YYYY-MM-DD HH:mm")}
                  </div>
                  <div>
                    Status: Checked In @{" "}
                    {moment(waypoint.start).format("HH:mm")}
                  </div>
                </div>
                <div>
                  {waypoint.complete ? (
                    <Button
                      onClick={() =>
                        this.props.toggleWaypoint(
                          waypoint.id,
                          waypoint.complete
                        )
                      }
                    >
                      <i className="fa fa-check" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        this.props.toggleWaypoint(
                          waypoint.id,
                          waypoint.complete
                        )
                      }
                    >
                      <i className="fa fa-times" />
                    </Button>
                  )}
                </div>
              </s.WaypointStepper>
            ))}
        </s.WaypointTracker>
      </s.Panel>
    )
  }
}

ActiveTripPanel.propTypes = {
  trip: TripPropTypes,
  waypoints: PropTypes.array.isRequired,
  toggleWaypoint: PropTypes.func.isRequired
}

const mapStateToProps = ({ trips }) => ({
  trip: trips.activeTrip,
  waypoints: trips.activeTrip && trips.activeTrip.waypoints
})

export default connect(
  mapStateToProps,
  { toggleWaypoint }
)(ActiveTripPanel)
