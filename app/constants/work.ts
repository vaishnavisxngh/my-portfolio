import * as THREE from "three";
import { WorkTimelinePoint } from "../types/work";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2009-2022',
    title: 'St. Josephs Convent',
    subtitle: 'High School',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023-27',
    title: 'KIIT-DU',
    subtitle: 'B.tech [CSE]',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'MLSA',
    subtitle: 'Technical Executive | UI/UX Lead 25',
    position: 'right',
  },
   {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]