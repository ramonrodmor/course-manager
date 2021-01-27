import { Component, Input, OnChanges } from "@angular/core";

@Component ({
    selector: 'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number = 0;
    startWidth: number;

    ngOnChanges(): void {
        this.startWidth = this.rating * 74 / 5;
    }
}