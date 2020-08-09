import { Injectable, QueryList } from '@angular/core';
import { Section } from './section';
import { BehaviorSubject } from 'rxjs';

/**
 * Created by hareen
 */

@Injectable()
export class AutoScrollService {

  public static SCROLL_TIME = 500;
  public static SCROLL_TIME_HORIZONTAL = 200;
  public static UNIT_SCROLL_GAP = 40;

  public sections: BehaviorSubject<Array<Section>> = new BehaviorSubject([]);
  public currentSection: BehaviorSubject<Section> = new BehaviorSubject(null);
  public stickyHeightChange: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public notStickyHeights: BehaviorSubject<Map<number, number>> = new BehaviorSubject(new Map<number, number>());

  public stickyHeight = 0;
  public stickyHeights: Map<number, number> = new Map<number, number>();

  public lowestStickyId: BehaviorSubject<number> = new BehaviorSubject(-1);

  public isTabClicked = false;

  // private frameID: any;

  constructor() {
  }

  public setSections(directives: QueryList<any>) {
    directives.forEach(directive => {
        let section = new Section();
        section.id = directive.tcAutoScroll;
        section.title = directive.title;
        this.sections.getValue().push(section);
      }
    );
  }

  /**
   * @param target
   * @param scrollContainer
   * @param callback
   */
  public scrollTo(target: any, scrollContainer: any, callback?: any) {
    let startTime_ = Date.now();
    let period = AutoScrollService.SCROLL_TIME;
    let frameID: any;
    this.verticalScroll(target, scrollContainer, period, startTime_, callback, frameID);
  }

  /**
   * @param {string} targetID
   * @param {string} scrollContainerID
   * @param callback
   */
  public scrollToID(targetID: string, scrollContainerID: string, callback?: any) {
    let target = document.getElementById(targetID);
    let container = document.getElementById(scrollContainerID);
    if (target != null && target !== undefined && container != null && container !== undefined) {
      this.scrollTo(target, container, callback);
    }
  }

  /**
   *
   * @param {string} targetID
   * @param {string} scrollContainerID
   * @param {boolean} isLL
   * @param callback
   */
  public scrollHorizontalTo(target: any, scrollContainer: any, isRightToRight?: boolean, callback?: any) {
    let startTime_ = Date.now();
    let period = AutoScrollService.SCROLL_TIME_HORIZONTAL;
    let frameID: any;
    if (isRightToRight) {
      this.horizontalScrollRightToRight(target, scrollContainer, period, startTime_, callback, frameID);
    } else {
      this.horizontalScrollLeftToLeft(target, scrollContainer, period, startTime_, callback, frameID);
    }
  }

  /**
   * @param target
   * @param scrollContainer
   * @param period
   * @param startTime_
   * @param callback
   */
  private verticalScroll(target: any, scrollContainer: any, period, startTime_, callback?: any, frameID?: any) {

    let offset_ = target.offsetTop - this.getScrollHeight();
    let scrollTop_ = scrollContainer.scrollTop;
    let diff_ = offset_ - scrollTop_;

    let remainingTime_ = period - (Date.now() - startTime_);

    if (remainingTime_ < 0.1) {
      scrollContainer.scrollTop = offset_;
      if (frameID) {
        cancelAnimationFrame(frameID);
      }
      if (callback) {
        callback();
      }
      return;
    }

    let gap_ = 1000 * diff_ / (remainingTime_ * 60);

    if (Math.abs(diff_) > Math.abs(gap_)) {

      scrollContainer.scrollTop = scrollContainer.scrollTop + gap_;

      if (scrollContainer.scrollHeight - scrollContainer.clientHeight === scrollContainer.scrollTop ||
        scrollContainer.scrollTop === 0) {
        if (callback) {
          callback();
        }
        return;
      }

      frameID = requestAnimationFrame(() => {
        this.verticalScroll(target, scrollContainer, period, startTime_, callback, frameID);
      });
    } else {
      scrollContainer.scrollTop = offset_;
      if (frameID) {
        cancelAnimationFrame(frameID);
      }
      if (callback) {
        callback();
      }
      return;
    }
  }

  /**
   * Move the scroll window till scroll window left side align with target left side
   * @param target
   * @param scrollContainer
   * @param period
   * @param startTime_
   * @param callback
   */
  private horizontalScrollLeftToLeft(
    target: any, scrollContainer: any, period, startTime_, callback?: any, frameID?: any) {

    let offset_ = target.offsetLeft;
    let scrollLeft_ = scrollContainer.scrollLeft;
    let diff_ = offset_ - scrollLeft_;

    let remainingTime_ = period - (Date.now() - startTime_);

    if (remainingTime_ < 0.1) {
      scrollContainer.scrollLeft = offset_;
      if (frameID) {
        cancelAnimationFrame(frameID);
      }
      if (callback) {
        callback();
      }
      return;
    }

    let gap_ = 1000 * diff_ / (remainingTime_ * 60);

    if (Math.abs(diff_) > Math.abs(gap_)) {

      scrollContainer.scrollLeft = scrollContainer.scrollLeft + gap_;

      if (scrollContainer.scrollWidth - scrollContainer.clientWidth === scrollContainer.scrollLeft ||
        scrollContainer.scrollLeft === 0) {
        if (callback) {
          callback();
        }
        return;
      }

      frameID = requestAnimationFrame(() => {
        this.horizontalScrollLeftToLeft(target, scrollContainer, period, startTime_, callback, frameID);
      });
    } else {
      scrollContainer.scrollLeft = offset_;
      if (frameID) {
        cancelAnimationFrame(frameID);
      }
      if (callback) {
        callback();
      }
      return;
    }
  }

  /**
   * Move the scroll window till scroll window right side align with target right side
   * @param target
   * @param scrollContainer
   * @param period
   * @param startTime_
   * @param callback
   */
  private horizontalScrollRightToRight(
    target: any, scrollContainer: any, period, startTime_, callback?: any, frameID?: any) {

    let offset_ = target.offsetLeft + target.offsetWidth;
    let scrollTop_ = scrollContainer.scrollLeft + scrollContainer.clientWidth;
    let diff_ = offset_ - scrollTop_;

    let remainingTime_ = period - (Date.now() - startTime_);

    if (remainingTime_ < 0.1) {
      scrollContainer.scrollLeft = offset_ - scrollContainer.clientWidth;
      if (frameID) {
        cancelAnimationFrame(frameID);
      }
      if (callback) {
        callback();
      }
      return;
    }

    let gap_ = 1000 * diff_ / (remainingTime_ * 60);

    if (Math.abs(diff_) > Math.abs(gap_)) {

      scrollContainer.scrollLeft = scrollContainer.scrollLeft + gap_;

      if (scrollContainer.scrollWidth - scrollContainer.clientWidth === scrollContainer.scrollLeft ||
        scrollContainer.scrollLeft === 0) {
        if (callback) {
          callback();
        }
        return;
      }

      frameID = requestAnimationFrame(() => {
        this.horizontalScrollRightToRight(target, scrollContainer, period, startTime_, callback);
      });
    } else {
      scrollContainer.scrollLeft = offset_ - scrollContainer.clientWidth;
      if (frameID) {
        cancelAnimationFrame(frameID);
      }
      if (callback) {
        callback();
      }
      return;
    }
  }

  /**
   * @deprecated
   * @param target - element which needed to be come up
   * @param scrollContainer
   * @param callback - this function will be called after finishing the scrolling
   */
  public scrollTo_(target: any, scrollContainer: any, callback?: any) {

    let difference = Math.abs(scrollContainer.scrollTop - target.offsetTop);
    let timeGap = AutoScrollService.SCROLL_TIME * (AutoScrollService.UNIT_SCROLL_GAP / difference);
    let scrollGap = AutoScrollService.UNIT_SCROLL_GAP;

    if (difference <= AutoScrollService.UNIT_SCROLL_GAP * 10) {
      timeGap = timeGap / 10;
      scrollGap = scrollGap / 10;
    }
    this.scroll_(this.scroll_, scrollContainer, target.offsetTop, timeGap, scrollGap, callback);
  }

  /**
   * @deprecated
   * @param func
   * @param scrollContainer
   * @param {number} sectionTop
   * @param {number} timeGap
   * @param {number} scrollGap
   * @param callback
   * @private
   */
  private scroll_(
    func: any, scrollContainer: any, sectionTop: number, timeGap: number, scrollGap: number, callback?: any) {

    let difference = Math.abs(scrollContainer.scrollTop - sectionTop);

    if (difference <= scrollGap) {
      scrollContainer.scrollTop = sectionTop;
      if (callback) {
        callback();
      }
      return;
    }

    if (scrollContainer.scrollTop > sectionTop) {
      scrollContainer.scrollTop = scrollContainer.scrollTop - scrollGap;
    } else {
      scrollContainer.scrollTop = scrollContainer.scrollTop + scrollGap;
    }

    if (scrollContainer.scrollHeight - scrollContainer.clientHeight === scrollContainer.scrollTop ||
      scrollContainer.scrollTop === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    setTimeout(func, timeGap, func, scrollContainer, sectionTop, timeGap, scrollGap, callback);
  }

  private getScrollHeight() {
    let height = 0;
    this.stickyHeights.forEach((value, key) => {
      height += value;
    });
    return height;
  }
}
